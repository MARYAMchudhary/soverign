import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../../AbstractElements";
import product1 from "../../../../assets/images/ecommerce/product-table-1.png";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const CrewData = [
  {
    image: <Image attrImage={{ src: product1, style: style, alt: "" }} />,
    Name: (
      <div>
        <span>Interchargebla lens D</span>
      </div>
    ),
    Ttile: "$10",
    Twitter: (
      <div>
        <span>Interchargebla lens D</span>
      </div>
    ),
    action: (
      <div>
        <span>
          <Btn
            attrBtn={{
              style: style2,
              className: "btn btn-danger btn-xs",
              type: "button",
            }}
          >
            Delete
          </Btn>
        </span>{" "}
        &nbsp;&nbsp;
        <span>
          <Link to={"/dashboard/addcrew"}>
            <Btn
              attrBtn={{
                style: style2,
                className: "btn btn-success btn-xs",
                type: "button",
              }}
            >
              Edit{" "}
            </Btn>
          </Link>
        </span>
      </div>
    ),
  },
];
export const crewColumns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: "Name",
    selector: (row) => row.Details,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Ttile",
    selector: (row) => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: "Twitter",
    selector: (row) => row.Twitter,
    sortable: true,
    center: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    sortable: true,
    center: true,
  },
];
