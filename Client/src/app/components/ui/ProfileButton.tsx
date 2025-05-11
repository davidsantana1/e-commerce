function ProfileButton() {
  return (
    <div className="bg-brand-50 hover:bg-brand-200 flex cursor-pointer items-center justify-around gap-4 rounded-[22rem] lg:py-1 lg:pr-1 lg:pl-4">
      <p className="text-brand-900 hidden font-bold lg:flex">David Santana</p>
      <img
        src="/cs50cat.jpg"
        className="aspect-square h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
        alt=""
      />
    </div>
  );
}

export default ProfileButton;
