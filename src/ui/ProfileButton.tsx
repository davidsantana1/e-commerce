function ProfileButton() {
  return (
    <div className="bg-brand-50 flex cursor-pointer items-center justify-around gap-4 rounded-[22rem] py-1 pr-2 pl-4">
      <p className="text-brand-900 font-bold">David Santana</p>
      <img
        src="/cs50cat.jpg"
        className="aspect-square h-12 w-12 rounded-full object-cover"
        alt=""
      />
    </div>
  );
}

export default ProfileButton;
