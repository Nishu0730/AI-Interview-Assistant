import {
  X,
  Moon,
  Bell,
  User,
} from "lucide-react";

function SettingsModal({ open, onClose }) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="card p-8 w-[500px]">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl font-bold">
            Settings
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="space-y-6">

          <div className="flex justify-between items-center">

            <div className="flex gap-3 items-center">

              <Moon />

              <span>Dark Mode</span>

            </div>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="flex justify-between items-center">

            <div className="flex gap-3 items-center">

              <Bell />

              <span>Notifications</span>

            </div>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="flex justify-between items-center">

            <div className="flex gap-3 items-center">

              <User />

              <span>Profile Visibility</span>

            </div>

            <input type="checkbox" />

          </div>

        </div>

        <button
          onClick={onClose}
          className="gradient-btn mt-8 w-full"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default SettingsModal;