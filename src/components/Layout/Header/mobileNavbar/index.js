import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { navbarData } from "../../../../data/header";
import { FaChevronRight } from "react-icons/fa";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <button type="button" onClick={closeModal}>
          <FiX size={30} />
        </button>
      ) : (
        <button type="button" onClick={openModal}>
          <FiMenu size={30} />
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex w-full min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in-out duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-darker bg-opacity-70" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-150"
              enterFrom="opacity-0 transform -translate-y-20"
              enterTo="opacity-100"
              leave="transition ease-in-out duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 transform -translate-y-20"
            >
              <div className="relative top-20 bg-white w-full px-5 py-3">
                {navbarData.map((item, index) => {
                  return (
                    <NavItem key={index} item={item} modalOpen={setIsOpen} />
                  );
                })}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNavbar;

const NavItem = ({ item, modalOpen }) => {
  const { title, to, children } = item;

  if (children) {
    return <NavItemHeader item={item} />;
  }

  return (
    <NavLink
      exact
      to={to}
      className="block my-0.5 text-md uppercase font-medium"
      activeClassName="text-red-500"
      onClick={() => modalOpen(false)}
    >
      {title}
    </NavLink>
  );
};

const NavItemHeader = (props) => {
  const { item } = props;
  const { title, children } = item;
  const [expanded, setExpand] = useState(false);

  const onExpandChange = (e) => {
    e.preventDefault();
    setExpand((expanded) => !expanded);
  };

  return (
    <>
      <button
        type="button"
        className="w-full flex items-center gap-x-1"
        onClick={onExpandChange}
      >
        <span className="my-0.5 text-md uppercase font-medium">{title}</span>
        <FaChevronRight size={8} />
      </button>

      {expanded && (
        <div className="ml-2">
          {children.map((item) => {
            const { title, children } = item;

            if (children) {
              return (
                <div>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: item.to,
                    }}
                  />
                </div>
              );
            }

            return (
              <NavLink
                to={item.to}
                className="mt-0.5 text-md block capitalize font-medium"
                activeClassName="text-red-500"
              >
                {title}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};
