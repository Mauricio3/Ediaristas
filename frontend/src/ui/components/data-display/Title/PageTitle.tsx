import React from "react";

interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {

    return (
        <div>
            {props.title}
            {props.subtitle}
------------------------------------------

            {props.children}

            ------------------------------------------
        </div>
    );
}

export default PageTitle;