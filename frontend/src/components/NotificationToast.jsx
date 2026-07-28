import { Bell, CheckCircle } from "lucide-react";

function NotificationToast() {
  return (
    <div
      className="
      fixed
      top-6
      right-6
      z-50
      card
      p-4
      w-80
      flex
      items-center
      gap-4
      shadow-xl
      animate-pulse
      "
    >

      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">

        <CheckCircle />

      </div>

      <div>

        <h3 className="font-semibold">
          Resume Uploaded
        </h3>

        <p className="text-sm text-gray-400">
          Skills extracted successfully.
        </p>

      </div>

      <Bell className="ml-auto text-violet-400" />

    </div>
  );
}

export default NotificationToast;