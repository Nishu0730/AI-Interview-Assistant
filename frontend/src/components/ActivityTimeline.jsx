import {
  Upload,
  BrainCircuit,
 FileText,
 CheckCircle,
} from "lucide-react";

function ActivityTimeline() {
  const activities = [
    {
      title: "Resume Uploaded",
      time: "2 mins ago",
      icon: <Upload size={20} />,
      color: "bg-blue-500",
    },
    {
      title: "Skills Extracted",
      time: "2 mins ago",
      icon: <BrainCircuit size={20} />,
      color: "bg-violet-500",
    },
    {
      title: "Questions Generated",
      time: "1 min ago",
      icon: <FileText size={20} />,
      color: "bg-cyan-500",
    },
    {
      title: "Interview Ready",
      time: "Now",
      icon: <CheckCircle size={20} />,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="card p-7">

      <h2 className="text-2xl font-bold mb-6">
        Activity Timeline
      </h2>

      <div className="space-y-6">

        {activities.map((item, index) => (

          <div
            key={index}
            className="flex gap-4"
          >

            <div
              className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center`}
            >
              {item.icon}
            </div>

            <div className="flex-1">

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityTimeline;