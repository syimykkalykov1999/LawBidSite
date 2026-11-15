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
   минуя сайт. Оба файла `/.well-known/` (D1-48, 13.11) собирает только репозиторий LawBid:
   `scripts/seo/well-known.mjs` в `seo-deploy.yml`. В этом репозитории их нет и класть их сюда нельзя:
   при сборке сайта папка `.well-known` в публикацию не попадает, а проверка в `seo-deploy.yml`
   роняет выкладку, если в `assetlinks.json` стоит заглушка.

## Что заполнить после появления сборок

### `src/lib/referral.ts`

- `APP_STORE_ID = "TODO"` → числовой id приложения из App Store Connect (например `"6471234567"`).
  Как только там стоит число, кнопка App Store на странице-приглашении включается сама.
- `ANDROID_PACKAGE` уже `com.lawbid.lawbid`; менять только если поменяется applicationId.

### `/.well-known/assetlinks.json` и `/.well-known/apple-app-site-association`

Генерирует `scripts/seo/well-known.mjs` в репозитории LawBid. Отпечатки SHA-256 для Android
владелец ставит в переменную репозитория LawBid `ANDROID_APP_SHA256` (через запятую: ключ подписи
Google Play и ключ загрузки). Без неё `assetlinks.json` не публикуется вовсе.

## Как это раздаётся сайтом

- Файлы `/.well-known/` выкладывает `seo-deploy.yml` репозитория LawBid в тот же бакет, что и сайт
  (с `Content-Type: application/json`); сайт свою папку `.well-known` не публикует.
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
