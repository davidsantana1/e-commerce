function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 lg:p-0">
      <div className="flex h-screen w-full grid-cols-1 grid-rows-14 flex-col gap-4 lg:grid lg:grid-cols-10 lg:grid-rows-4">
        <div className="bg-brand-500 flex items-center justify-center rounded-3xl p-4 lg:col-span-4 lg:row-span-3">
          Hello
        </div>
        <div className="bg-brand-500 flex items-center justify-center rounded-3xl p-4 lg:col-span-4 lg:row-span-1">
          Hello
        </div>
        <div className="bg-brand-500 flex items-center justify-center rounded-3xl p-4 lg:col-span-2 lg:row-span-1">
          Hello
        </div>
        <div className="bg-brand-500 flex items-center justify-center rounded-3xl p-4 lg:col-span-3 lg:row-span-2">
          Hello
        </div>
        <div className="bg-brand-500 flex items-center justify-center rounded-3xl p-4 lg:col-span-3 lg:row-span-2">
          Hello
        </div>
        <div className="bg-brand-500 flex items-center justify-center rounded-3xl p-4 lg:col-span-4 lg:row-span-1">
          Hello
        </div>
        <div className="bg-brand-500 flex items-center justify-center rounded-3xl p-4 lg:col-span-6 lg:row-span-1">
          Hello
        </div>
      </div>
    </div>
  );
}

export default HomePage;
