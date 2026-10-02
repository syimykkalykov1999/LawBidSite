export const attorneySteps: readonly { title: string; body: string }[] = [
  {
    title: "Create your account",
    body: "Download the app and choose the attorney role. Assistants join through their attorney's team.",
  },
  {
    title: "Verify your license",
    body: "Add your bar license and the states you are admitted in. Verified profiles get the blue badge.",
  },
  {
    title: "Choose your practice",
    body: "Pick your practice areas and sub-specialties. They decide which cases reach your feed.",
  },
  { title: "Bid on cases", body: "Open the Cases tab, read the details and send your price, start date and approach." },
  {
    title: "Get hired and grow",
    body: "Work with the client in one chat, then earn reviews that bring the next case.",
  },
];

// Mirrors the assistant duties an attorney can switch on per assistant (duty.* in the app).
export const assistantDuties: readonly { title: string; body: string }[] = [
  { title: "Calls", body: "Calls to the attorney ring this assistant too." },
  { title: "Chats", body: "Reply to clients in your chats." },
  { title: "Files", body: "Send documents and photos in chats." },
  { title: "Cases", body: "Browse, save and comment on cases, with your approval." },
  { title: "Bid drafts", body: "Prepare bids. You review and send them." },
  { title: "Publications", body: "Prepare posts and news, published after your approval." },
  { title: "Profile", body: "Suggest profile edits, applied after your approval." },
  { title: "Tasks", body: "Work on tasks in the planner and mark steps done." },
];
