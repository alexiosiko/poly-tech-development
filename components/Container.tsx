import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: any;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
	
      className={`container mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

