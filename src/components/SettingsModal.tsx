import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebaseConfig";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [theme, setTheme] = useState("light");
  const [apiKeys, setApiKeys] = useState({
    OpenAI: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeys({
      ...apiKeys,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed inset-0 z-50 overflow-auto bg-black bg-opacity-40`}
    >
      <div className="relative p-4 w-full max-w-md m-auto flex-col flex rounded-lg bg-default-secondary">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-1 m-2 rounded-full text-default-white"
        >
          X
        </button>

        <h3 className="text-lg font-semibold text-center mb-4 text-default-white">
          Settings
        </h3>

        {/* Theme Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="theme"
            className="block mb-2 text-sm font-medium text-default-white"
          >
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="block w-full p-2.5 bg-default-secondary-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        {/* API Keys */}
        <div className="space-y-4">
          {["OpenAI"].map((key) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="block mb-2 text-sm font-medium text-default-white"
              >
                {`${key} API Key`}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={apiKeys[key as keyof typeof apiKeys]}
                onChange={handleChange}
                className="block w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder={`Enter ${key} API key`}
              />
            </div>
          ))}
        </div>

        {/* Sign Out */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={() => {
              signOut(auth);
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-default-primary rounded-lg hover:bg-default-secondary-3 focus:ring-2 focus:ring-blue-400"
          >
            Sign Out
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              /* Handle save logic here */
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-default-primary rounded-lg hover:bg-default-secondary-3 focus:ring-2 focus:ring-blue-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
