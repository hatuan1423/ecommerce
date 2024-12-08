const BannersComponent = () => {
  return (
    <div className="w-full h-[500px] bg-yellow-200 grid grid-cols-2">
      {/* 1 */}
      <div className="bg-green-200 grid grid-rows-2">
        <div className="bg-white flex justify-center items-center ">
          <div className="">
            <img
              src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KlcOSLB98oI2TwVPZer1D84YGeqYBez6Tn0MyRcjTk8w1YQ8MSA8hjpG53NFClvvDx3kVO5qtKaPYb8z~EGMtJaNNetnIkiOCTmY3awsEp84X-3EYXv-HAowmN4~atAYkL9FcMX9GhNF2HTCzi3nHBJJuHGoZpvxQLAf6R~Nej1k3YOt27NT3H2yQiNgJu-6YAw01M-BRIzvhFdngejvmAphV9SsoQDnD0LNCu-sD8Z5G1tpzNtk6NLfPAqjnWWRT0KrBWZ9VJHgl-pHRAZvklZGCn-YOg6MJ4Tw~W5bPMj9Yif7QjXAaXUzYyTWyj5HBJMkTaA9JOflrO0LyTFRJA__"
              alt=""
              className=""
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Playstation 5</h1>
            <p className="text-xs text-[#66666645]">
              Incredible powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience
            </p>
          </div>
        </div>
        <div className="bg-orange-300 grid grid-cols-2">
          <div className="bg-red-300">col 1</div>
          <div className="bg-teal-200">col 2</div>
        </div>
      </div>
      {/* 2 */}
      <div className="bg-pink-200 flex items-center p-4">
        <div className="flex flex-col justify-center">
          <h1>Macbook Air</h1>
          <p>
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KlcOSLB98oI2TwVPZer1D84YGeqYBez6Tn0MyRcjTk8w1YQ8MSA8hjpG53NFClvvDx3kVO5qtKaPYb8z~EGMtJaNNetnIkiOCTmY3awsEp84X-3EYXv-HAowmN4~atAYkL9FcMX9GhNF2HTCzi3nHBJJuHGoZpvxQLAf6R~Nej1k3YOt27NT3H2yQiNgJu-6YAw01M-BRIzvhFdngejvmAphV9SsoQDnD0LNCu-sD8Z5G1tpzNtk6NLfPAqjnWWRT0KrBWZ9VJHgl-pHRAZvklZGCn-YOg6MJ4Tw~W5bPMj9Yif7QjXAaXUzYyTWyj5HBJMkTaA9JOflrO0LyTFRJA__"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannersComponent;
