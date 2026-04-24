import St from 'gi://St';
import Clutter from 'gi://Clutter';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

function convertDate() {
  const converted = new Intl.DateTimeFormat('fa-IR', {
      month: 'long',
      day: 'numeric',
      weekday: 'long'
  }).format(new Date());;
  return converted;
}

export default class PersianDateDisplay extends Extension {
    enable() {
        this.label = new St.Label({
            text: convertDate(),
            y_align: Clutter.ActorAlign.CENTER
        });
        Main.panel._centerBox.insert_child_at_index(this.label, 0);
    }

    disable() {
        if (this.label) {
            this.label.destroy();
            this.label = null;
        }
    }
}
