import GlowTop from "@/assets/glow-top.svg";
import img from "@/assets/adXchainProduct.png"
import { Blinds, Check, User, Wallet } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: Blinds,
      name: "Discover the Cutting Edge",
      description: "X-Peerience offers a platform for enthusiasts to explore and discuss the forefront of technology.",
    },
    {
      icon: Check,
      name: "Most Up-to-Date Experience",
      description: "X-Peerience is a platform where tech enthusiasts can share their knowledge and experience with the community.",
    },
    {
      icon: Wallet,
      name: "Share Your Knowledge",
      description: "X-Peerience offers a platform for enthusiasts to explore and discuss the forefront of technology.",
    },
    {
      icon: User,
      name: "Contribute to the Community",
      description: "X-Peerience is a platform where tech enthusiasts can share their knowledge and experience with the community.",
    },
  ];
  return (
    <section className="overflow-x-hidden">
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
            <img
              src={GlowTop}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div>
            {/* Section content */}
            <div className="flex flex-col max-w-xl mx-auto md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div
                className="order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center"
                data-aos="fade-down"
              >
                <h3 className="pb-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                    Features
                </h3>
                <p className="mb-8 text-lg text-zinc-400">
                   X-Peerience is a platform where tech enthusiasts can share their knowledge and experience with the community.
                </p>
                <dl className="max-w-xl grid grid-cols-1 gap-4 lg:max-w-none">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="px-2 py-1 rounded group hover:bg-gradient-to-r from-white/80 via-white to-white/80 duration-500"
                    >
                      <div className="flex items-center mb-1 space-x-2 ">
                        <feature.icon className="w-4 h-4 shrink-0 text-zinc-300 group-hover:text-zinc-950 duration-500" />
                        <h4 className="font-medium text-zinc-50 group-hover:text-zinc-950 duration-500">
                          {feature.name}
                        </h4>
                      </div>
                      <p className="text-sm text-left text-zinc-400 group-hover:text-zinc-950 duration-500">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex max-w-2xl mx-auto mt-16 md:w-5/12 lg:w-1/2 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="z-10 flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
                  <img
                    src={img}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="w-[76rem] z-10 rounded-xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};