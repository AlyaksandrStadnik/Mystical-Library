import { Pagination } from "antd";
import { PAGE_SIZE } from "../../utils/constants.ts";
import "./WithPagination.css";

type WithPagination = {
  page: number;
  total: number;
  onChange: (page: number) => void;
  children: React.ReactNode;
};

const WithPagination = ({
  page,
  total,
  onChange,
  children,
}: WithPagination) => (
  <>
    {children}
    <Pagination
      showSizeChanger={false}
      pageSize={PAGE_SIZE}
      align="center"
      current={page}
      total={total}
      onChange={onChange}
      className="mystical-pagination"
    />
  </>
);

export default WithPagination;
