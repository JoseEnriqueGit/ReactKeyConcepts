import React from "react";

type NameBadgeProps = {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameBadge = ({ name, onChange }: NameBadgeProps) => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default NameBadge;