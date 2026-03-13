import { ChevronRightIcon, Check, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onDeleteTaskClick, onTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    });
    navigate(`/task?${query.toString()}`);
  }
  return (
    <h1>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        <li>
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex gap-2 p-2">
                <button
                  onClick={() => onTaskClick(task.id)}
                  className={`flex w-full text-left bg-slate-400 text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}
                >
                  {task.isCompleted && <Check />}
                  {task.title}
                </button>
                <Button
                  onClick={() => onSeeDetailsClick(task)}
                  className=" bg-slate-400 text-white p-2 rounded-md"
                >
                  {" "}
                  <ChevronRightIcon />{" "}
                </Button>
                <Button
                  onClick={() => onDeleteTaskClick(task.id)}
                  className=" bg-slate-400 text-white p-2 rounded-md"
                >
                  {" "}
                  <TrashIcon />{" "}
                </Button>
              </li>
            );
          })}
        </li>
      </ul>
    </h1>
  );
}

export default Tasks;
