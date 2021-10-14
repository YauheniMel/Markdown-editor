import { searchCurrentWrap } from "./search-current-wrap.js";
import { EventsManager } from "./events-manager.js";
import { Validation } from "./validation.js";
import { deleteLineItem } from "./delete-line-item.js";
import { changeViewWrapPreview } from "./change-view-wrap-preview.js";
import { Markdown } from "./markdown.js";

const btnChangeViewEl = document.querySelector(".btn-change-view");

changeViewWrapPreview(btnChangeViewEl);
searchCurrentWrap();
deleteLineItem();

new EventsManager();
new Validation();
new Markdown();
