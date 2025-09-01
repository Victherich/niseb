
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaUser } from "react-icons/fa";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
    Roboto, "Helvetica Neue", Arial;
  user-select: none;
  z-index:9999999999999999;
`;

// const Trigger = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   padding: 5px 14px;
//   font-size: 14px;
//   border-radius: 10px;
//   background:transparent;
// //   background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
//   box-shadow: 0 6px 18px rgba(31, 41, 55, 0.08);
// //   border: 1px solid rgba(99, 102, 241, 0.12);
// border: 1px solid transparent;
//   cursor: pointer;
//   min-width: 160px;
//   transition: transform 220ms ease, box-shadow 220ms ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 12px 28px rgba(31, 41, 55, 0.12);
//   }

//   &:focus {
//     // outline: 3px solid rgba(99, 102, 241, 0.14);
//   }
// `;

// const Label = styled.span`
//   flex: 1;
//   text-align: left;
//   font-weight: bold;
//   color: white;
//   font-size: 1rem;
// `;

// const Caret = styled.span`
//   display: inline-block;
//   width: 12px;
//   height: 12px;
//   transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
//   transition: transform 320ms cubic-bezier(.22, 1, .36, 1);
//   opacity: 1;
//   color:white;
// `;



const Trigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 2px; /* reduce space between text & arrow */
  padding: 5px 14px;
  font-size: 14px;
  border-radius: 10px;
  background: transparent;
  box-shadow: 0 6px 18px rgba(31, 41, 55, 0.08);
  border: 1px solid transparent;
  cursor: pointer;
  min-width: 80px;
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(31, 41, 55, 0.12);
  }
`;

const Label = styled.span`
  font-weight: 500;
  color: white;
  font-size: 1rem;
  white-space: nowrap; /* keeps text + arrow tight */
`;

const Caret = styled.span`
  display: inline-flex;
  align-items: center; /* keeps arrow vertically centered with text */
  margin-left: 4px;
  width: 16px;   /* increased from 12px */
  height: 16px;  /* increased from 12px */
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 320ms cubic-bezier(.22, 1, .36, 1);
  color: white;
  svg {
    width: 100%;
    height: 100%;
  }
`;




const Menu = styled.ul`
  position: absolute;
  top: ${({ placement }) => (placement === "top" ? "auto" : "calc(100% + 12px)")};
  bottom: ${({ placement }) => (placement === "top" ? "calc(100% + 12px)" : "auto")};
  right: 0;
  width: 250px;
  margin: 0;
  padding: 10px;
  list-style: none;
  border-radius: 14px;
  background: linear-gradient(180deg, #ffffff, #fbfdff);
  box-shadow: 0 20px 40px rgba(2, 6, 23, 0.3);
  border: 1px solid rgba(15, 23, 42, 0.04);
  z-index: 10009999999999999;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: background 160ms ease, transform 160ms ease;
 

  &:hover,
  &[data-focused="true"] {
    background: rgba(99, 102, 241, 0.2);
    transform: translateX(4px);
  }

  a {
    // color: #222;
     color:green;
    text-decoration: none;
    flex: 1;
    font-weight: 600;
  }
`;

export default function BeautifulDropdown2({
  label = "Our Allies",
  animationDuration = 600,
  placement = "bottom",
  color, fontSize
}) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);

  const options = [
    { label: `AJGA - JOURNAL`, href: "https://www.ajga-journal.org/aboutus" },
    { label: "AFSJ – A NISEB PUBLICATION", href: "https://africanscientistjournal.org/" },
    { label: "BIOLINE INTERNATIONAL", href: "https://www.bioline.org.br/" },
    { label: "AUTHORS GUIDE - IJBHS", href: "https://ijbhs.org/authors-guide/" },
    // { label: "New Member", href: "/membership" },
    // { label: "Renew Membership", href: "/renewmembership" },
  ];

  useEffect(() => {
    function handleClick(e) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        setFocusedIndex(-1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((i) => Math.min(i + 1, options.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          const opt = options[focusedIndex];
          window.location.href = opt.href;
          setOpen(false);
        }
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, focusedIndex, options]);

  useEffect(() => {
    if (focusedIndex >= 0 && itemsRef.current[focusedIndex]) {
      itemsRef.current[focusedIndex].scrollIntoView({ block: "nearest" });
    }
  }, [focusedIndex]);

  return (
    <Wrapper ref={wrapperRef}>
      <Trigger
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="beautiful-dropdown-menu"
      >
        <Label style={{color:color, fontSize:fontSize,}}>{label}</Label>
      <Caret open={open} aria-hidden style={{color:color}}>
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Caret>

      </Trigger>

      {open && (
        <Fade
          cascade={false}
          duration={animationDuration}
          triggerOnce={false}
          direction="up"
        >
          <Menu id="beautiful-dropdown-menu" role="menu" placement={placement}>
            {options.map((opt, i) => (
              <Item
                key={i}
                role="menuitem"
                tabIndex={-1}
                ref={(el) => (itemsRef.current[i] = el)}
                data-focused={focusedIndex === i}
                onMouseEnter={() => setFocusedIndex(i)}
                onClick={() => {
                  window.location.href = opt.href;
                  setOpen(false);
                }}
              >
                <a href={opt.href}>{opt.label}</a>
              </Item>
            ))}
          </Menu>
        </Fade>
      )}
    </Wrapper>
  );
}

/*
USAGE
------
import BeautifulDropdown from './BeautifulDropdown.react';

<BeautifulDropdown label="Membership" />

This dropdown will navigate directly to the respective pages when an option is clicked.
*/