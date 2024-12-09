/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const TabTitle = ({title}) => {
    return (
        <div>
            <Helmet title={`Poster Hub | ${title}`} />
        </div>
    );
};

export default TabTitle;