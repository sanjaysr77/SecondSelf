import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Sidebar } from "./components/SideBar";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
    return (
        <div className="flex justify-center mt-4">
            <div className="">
                <Button variant="primary" text="Add File" startIcon={<PlusIcon />} />
            </div>
            <div className="">
                <Button variant="secondary" text="Add File" startIcon={<PlusIcon />} />
            </div>

            <Card title="hi there" />
            <Input placeholder="Type something..." />
            <Sidebar />
        </div>
    )
}

export default App;