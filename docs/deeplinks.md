# Ссылки-приглашения и deep links (lawbid.dev/r/КОД)

Партнёр делится ссылкой вида `https://lawbid.dev/r/ABCD1234`. Что с ней происходит:

1. **Приложение не установлено.** Открывается страница-приглашение на сайте. Это не отдельная страница в Next.js:
   сайт статический, и GitHub Pages отдаёт для любого неизвестного адреса файл `404.html`
   (он собирается из `src/app/not-found.tsx`). Скрипт на этой странице видит путь `/r/КОД` и рисует
   приглашение: код, кнопку «Скопировать», «Открыть в приложении», кнопки магазинов и три шага.
   Язык выбирается по языку браузера (ru → русский, иначе английский), есть переключатель.
2. **Кнопка Google Play** ведёт на
   `https://play.google.com/store/apps/details?id=com.lawbid.lawbid&referrer=lawbid_ref%3DКОД`.
   Приложение при первом запуске читает Install Referrer, находит `lawbid_ref=КОД` и само применяет код.
3. **Кнопка App Store** пока выключена («Скоро в App Store»): id приложения ещё нет.
4. **«Открыть в приложении»** — ссылка `lawbid://referral/КОД`. Срабатывает, если приложение уже стоит.
5. **Когда будут собраны магазинные сборки**, можно включить «настоящие» deep links (Android App Links
   и iOS Universal Links): тогда ссылка `https://lawbid.dev/r/КОД` будет открывать приложение сразу,
   минуя сайт. Для этого нужны два файла в `public/.well-known/`, они уже лежат там как шаблоны.

## Что заполнить после появления сборок

### `src/lib/referral.ts`

- `APP_STORE_ID = "TODO"` → числовой id приложения из App Store Connect (например `"6471234567"`).
  Как только там стоит число, кнопка App Store на странице-приглашении включается сама.
- `ANDROID_PACKAGE` уже `com.lawbid.lawbid`; менять только если поменяется applicationId.

### `public/.well-known/assetlinks.json` (Android App Links)

Заменить `REPLACE_WITH_SHA256` на SHA-256 отпечаток ключа, которым **подписана сборка в Google Play**.
Если включена подпись Google Play App Signing (обычно да), берётся отпечаток из
Play Console → Setup → App signing → «App signing key certificate» → SHA-256.
Формат: `AA:BB:CC:...` (32 пары через двоеточие, заглавные). Можно указать несколько отпечатков
(например ещё и ключ отладочной сборки) — это массив.

Для локальной сборки отпечаток смотрится так:

```
keytool -list -v -keystore путь/к/keystore.jks -alias алиас | grep SHA256
```

В Android-приложении (`apps/mobile/android/app/src/main/AndroidManifest.xml`) должен быть intent-filter
с `android:autoVerify="true"` на `https` + `lawbid.dev` + `pathPrefix="/r/"`, а также схема `lawbid`
для `lawbid://referral/...`.

### `public/.well-known/apple-app-site-association` (iOS Universal Links)

Заменить `TEAMID` на Team ID из Apple Developer (10 символов, например `A1B2C3D4E5`). Bundle id
`com.lawbid.lawbid` менять, только если iOS bundle id другой. В Xcode у приложения должна быть
capability Associated Domains со строкой `applinks:lawbid.dev`.

## Как это раздаётся сайтом

- Всё из `public/` при `STATIC_EXPORT=1 npm run build` копируется в `out/` как есть, включая папку
  `.well-known` и файл без расширения — проверено, после сборки файлы лежат в
  `out/.well-known/assetlinks.json` и `out/.well-known/apple-app-site-association`.
- `public/.nojekyll` (пустой файл) — страховка: при деплое через GitHub Actions Jekyll не запускается,
  но если когда-нибудь переключиться на деплой из ветки, без этого файла Jekyll выбросит все пути,
  начинающиеся с точки, и `.well-known` пропадёт.
- `assetlinks.json` GitHub Pages отдаёт как `application/json` — для Android этого достаточно.
- `apple-app-site-association` лежит без расширения, и GitHub Pages отдаёт его как
  `application/octet-stream`. Apple требует `Content-Type: application/json`. На практике Apple
  CDN обычно принимает и octet-stream, но гарантии нет. Если проверка (см. ниже) не проходит,
  варианты: поставить перед GitHub Pages Cloudflare и правилом Transform Rules выставить
  `Content-Type: application/json` для пути `/.well-known/apple-app-site-association`, либо
  раздавать сайт с хостинга, где заголовки настраиваются (Cloudflare Pages, Netlify и т. п.).
  Редиректов на этом пути быть не должно; размер файла — до 128 КБ.

## Как проверить

Файлы доступны (после деплоя `main`):

```
curl -i https://lawbid.dev/.well-known/assetlinks.json
curl -i https://lawbid.dev/.well-known/apple-app-site-association
```

Оба должны отвечать 200 и JSON без плейсхолдеров `REPLACE_WITH_SHA256` / `TEAMID`.

Android:

- Google-проверка: `https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://lawbid.dev&relation=delegate_permission/common.handle_all_urls`
  — должен вернуть запись с `com.lawbid.lawbid` и отпечатком.
- На телефоне с установленной релизной сборкой: `adb shell pm get-app-links com.lawbid.lawbid` —
  домен `lawbid.dev` должен быть `verified`. Затем
  `adb shell am start -a android.intent.action.VIEW -d "https://lawbid.dev/r/TEST1234"` — должно открыться приложение.
- Install Referrer без App Links: установить приложение по ссылке с `referrer=lawbid_ref%3DКОД`
  (через Play, не через `adb install`) и после онбординга увидеть тост «Код приглашения применён».

iOS:

- Apple CDN: `https://app-site-association.cdn-apple.com/a/v1/lawbid.dev` — должен вернуть наш файл.
  Apple кэширует до суток, iOS тянет файл при установке приложения.
- Отправить себе `https://lawbid.dev/r/TEST1234` в Заметки/iMessage и нажать: должно открыться
  приложение, а не Safari. Долгое нажатие показывает «Open in LawBid».
- Пока App Links/Universal Links не включены, на iPhone после онбординга приложение само спросит
  «Есть код приглашения?» — код со страницы вводится вручную (кнопка «Скопировать» для этого и нужна).

Страница-приглашение сама по себе:

- Открыть `https://lawbid.dev/r/TEST1234` — должна показаться страница с кодом (ответ сервера будет
  404, это нормально для статического хостинга; поисковикам эта страница не нужна).
- Открыть `https://lawbid.dev/r/x` или `https://lawbid.dev/что-угодно` — обычная страница 404.
- Локально: `STATIC_EXPORT=1 npm run build`, затем `npx serve out` и открыть `http://localhost:3000/r/TEST1234`
  (serve отдаёт `404.html` для неизвестных путей).
