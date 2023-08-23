import { useState } from "react";
import { Bars3Icon, XMarcIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";
import { SelectedPage } from '@/shared/types'
import useMediaQuery from "@/hooks/useMediaQuerie";

type Props = {
    selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;

}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex item-center justify-between";
  const [ isMenuToggled, setIsMenuToggled ] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("min-width: 1060px")

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          {/* left */}
          <div className={`${flexBetween} w-full gap-16`}>
            <img className="w-8" alt="logo" src={Logo} />
            {/* right */}
            {isAboveMediumScreens ?  (
            <div className={`${flexBetween} w-full`}>
              {/* inner left side */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* inner right side */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sing in</p>
               <button>Become a Member</button>
                  </div>
              </div>) : 
              (
                <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              ><Bars3Icon className="h-6 w-6 text-white" />
              </button>

                  )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
