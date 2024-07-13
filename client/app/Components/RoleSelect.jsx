"use client";

import { useState } from "react";

export default function RoleSelect() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="mb-4">
      <select
        id="role"
        name="role"
        value={selectedRole}
        onChange={handleRoleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        required
      >
        <option value="">Select a Role</option>
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
      </select>
    </div>
  );
}
