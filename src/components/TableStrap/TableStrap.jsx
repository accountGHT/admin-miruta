import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
} from "reactstrap";
import PropTypes from "prop-types";

const paginateInit = {
  page_size: 10,
  page_number: 1,
  total_records: 0,
  total_pages: 0,
};

const TableStrap = ({ config, records, columns, loading }) => {
  const [paginate, setPaginate] = useState(paginateInit);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(records);
    setPaginate((curr) => ({
      ...curr,
      page_size: config.page_size,
      total_records: records.length,
      total_pages: Math.ceil(records.length / curr.page_size),
    }));
  }, [records]);

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between align-items-center"
        style={{ marginBottom: "20px" }}
      >
        <div className="d-flex flex-row justify-content-start align-items-center">
          {config.show_pagination && (
            <>
              <span style={{ marginRight: "10px" }}>
                {config.language?.length_menu
                  ? config.language?.length_menu.split("_MENU_")[0]
                  : ""}
              </span>
              <Dropdown
                toggle={() => setDropdownOpen((prevState) => !prevState)}
                isOpen={dropdownOpen}
              >
                <DropdownToggle caret>{paginate.page_size}</DropdownToggle>
                <DropdownMenu container="body">
                  {config.length_menu.map((num) => (
                    <DropdownItem
                      key={num}
                      onClick={() =>
                        setPaginate((curr) => ({ ...curr, page_size: num }))
                      }
                    >
                      {num}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <span style={{ marginLeft: "10px" }}>
                {config.language?.length_menu
                  ? config.language?.length_menu.split("_MENU_")[1]
                  : ""}
              </span>
            </>
          )}
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center">
          {config.show_filter && (
            <div className="d-flex flex-row justify-content-start align-items-center">
              <input
                type="text"
                className="form-control w-100"
                placeholder={config.language?.filter || "Filter..."}
                onChange={(e) => {
                  const value = e.target.value;
                  const dataFiltered = records.filter((record) =>
                    columns.some((column) =>
                      `${record[column.path || column.key]}`
                        .toLowerCase()
                        .includes(value.toLowerCase())
                    )
                  );
                  setData(dataFiltered);
                  setPaginate((curr) => ({
                    ...curr,
                    page_number: 1,
                    total_records: dataFiltered.length,
                    total_pages: Math.ceil(
                      dataFiltered.length / curr.page_size
                    ),
                  }));
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Table bordered>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.path || column.key}>
                {column.text || column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">
                    {config.language?.loading_text || "Loading..."}
                  </span>
                </div>
              </td>
            </tr>
          ) : data.length > 0 ? (
            data
              .slice(
                (paginate.page_number - 1) * paginate.page_size,
                paginate.page_number * paginate.page_size
              )
              .map((record) => (
                <tr key={record._id}>
                  {columns.map((column) => (
                    <td key={column.path || column.key}>
                      {column.cell
                        ? column.cell(record)
                        : record[column.path || column.key]}
                    </td>
                  ))}
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                {config.language?.no_data_text || "No data found"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {config.show_pagination && (
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row justify-content-start align-items-center">
            <span style={{ marginRight: "5px" }}>
              {config.language?.info.split("_START_")[0]}
            </span>
            <span style={{ marginRight: "5px" }}>
              {paginate.page_number === paginate.total_pages
                ? paginate.total_records -
                  paginate.page_size * (paginate.page_number - 1)
                : paginate.page_size * paginate.page_number -
                  paginate.page_size +
                  1}
            </span>
            <span style={{ marginRight: "5px" }}>
              {config.language?.info.split("_START_")[1].split("_END_")[0]}
            </span>
            <span style={{ marginRight: "5px" }}>
              {paginate.page_number === paginate.total_pages
                ? paginate.total_records
                : paginate.page_size * paginate.page_number}
            </span>
            <span style={{ marginRight: "5px" }}>
              {
                config.language?.info
                  .split("_START_")[1]
                  .split("_END_")[1]
                  .split("_TOTAL_")[0]
              }
            </span>
            <span style={{ marginRight: "5px" }}>{paginate.total_records}</span>
            <span style={{ marginRight: "5px" }}>
              {
                config.language?.info
                  .split("_START_")[1]
                  .split("_END_")[1]
                  .split("_TOTAL_")[1]
              }
            </span>
          </div>
          <div className="d-flex flex-row justify-content-end align-items-center btn-group">
            <button
              className={`btn btn-outline-${
                paginate.page_number === 1 ? "secondary" : "primary"
              }`}
              onClick={() =>
                setPaginate((curr) => ({
                  ...curr,
                  page_number: 1,
                }))
              }
              disabled={paginate.page_number === 1}
            >
              {config.language?.pagination.first || "First"}
            </button>
            <button
              className={`btn btn-outline-${
                paginate.page_number === 1 ? "secondary" : "primary"
              }`}
              onClick={() =>
                setPaginate((curr) => ({
                  ...curr,
                  page_number: curr.page_number - 1,
                }))
              }
              disabled={paginate.page_number === 1}
            >
              {config.language?.pagination.previous || "Previous"}
            </button>
            <span
              style={{ padding: "4px 10px" }}
              className="border border-primary text-primary"
            >
              {paginate.page_number}
              {/* / {paginate.total_pages} */}
            </span>
            <button
              className={`btn btn-outline-${
                paginate.page_number === paginate.total_pages
                  ? "secondary"
                  : "primary"
              }`}
              onClick={() =>
                setPaginate((curr) => ({
                  ...curr,
                  page_number: curr.page_number + 1,
                }))
              }
              disabled={paginate.page_number === paginate.total_pages}
            >
              {config.language?.pagination.next || "Next"}
            </button>
            <button
              className={`btn btn-outline-${
                paginate.page_number === paginate.total_pages
                  ? "secondary"
                  : "primary"
              }`}
              onClick={() =>
                setPaginate((curr) => ({
                  ...curr,
                  page_number: paginate.total_pages,
                }))
              }
              disabled={paginate.page_number === paginate.total_pages}
            >
              {config.language?.pagination.last || "Last"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

TableStrap.defaultProps = {
  columns: [],
  records: [],
  loading: false,
};

TableStrap.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  records: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

export default TableStrap;
