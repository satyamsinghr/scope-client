import React from 'react'

const Dashboard = () => {
  return (
    // <div className="container-fluid">
        <div >
              
                <div className="seachStrip py-lg-4 py-md-3 py-3 ">
                    <div className="row g-4 flex-lg-row flex-md-row flex-sm-row flex-column-reverse">
                        <div className="col-12 d-flex align-items-center justify-content-between gap-2">
                            <button className="btn btn-info d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                                        fill="white" />
                                </svg>
                                New
                            </button>
                            <div className="headerSearch">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
                                            fill="#A4A4A4" />
                                    </svg>
                                </div>
                                <input type="search" placeholder="Search" />
                                <div className="crossIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none">
                                        <g opacity="0.25">
                                            <path d="M17 7L7 17M17 17L7 7" stroke="black" stroke-width="2"
                                                stroke-linecap="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="paginationDiv mb-lg-4 mb-md-3 mb-3">
                    <div className="row g-4 flex-lg-column flex-md-column flex-column-reverse">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <ul className="tableInfo d-flex align-items-center gap-4">
                                        <li className="d-flex align-items-center gap-2">
                                            <span>Total</span>
                                            <span>:</span>
                                            <div className="totalCount">
                                                448
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <span>Active</span>
                                            <span>:</span>
                                            <div className="totalCount bg-success text-white">
                                                395
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center gap-2">
                                            <span>Terminated</span>
                                            <span>:</span>
                                            <div className="totalCount bg-none shadow-none">
                                                53
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-start mt-lg-0 mt-md-0 mt-3">
                                    <div className="pagination">
                                        <ul className="d-flex align-items-center gap-2">
                                            <li>
                                                <a href="#" className="inactive">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M10.8 16.8002L6 12.0002L10.8 7.20019M18 16.8002L13.2 12.0002L18 7.2002"
                                                            stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="inactive">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path d="M14.4001 16.7998L9.6001 11.9998L14.4001 7.19981"
                                                            stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="tableCounter">
                                                    8 of 80
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#" className="active">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path d="M9.5999 7.2002L14.3999 12.0002L9.5999 16.8002"
                                                            stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="active">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M13.2 7.1998L18 11.9998L13.2 16.7998M6 7.19981L10.8 11.9998L6 16.7998"
                                                            stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="pageTable">
                                <div className="pageTableInner">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    PERMIT
                                                </th>
                                                <th>
                                                    NAME
                                                </th>
                                                <th className="actionButon">
                                                    ACTION
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-nowrap">
                                                    00041350 DCC
                                                </td>
                                                <td className="text-nowrap">
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    00041350 DCC
                                                </td>
                                                <td>
                                                    BOWLING GR DAYCARE
                                                </td>
                                                <td className="actionButon">
                                                    <div className="d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M10.7999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V18C2.3999 19.9882 4.01168 21.6 5.9999 21.6H17.9999C19.9881 21.6 21.5999 19.9882 21.5999 18V13.1999M15.5993 2.40019L21.5999 2.3999M21.5999 2.3999V7.80005M21.5999 2.3999L11.399 12.5996"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M2.3999 5.3998H21.5999M8.3999 1.7998H15.5999M9.5999 17.3998V10.1998M14.3999 17.3998V10.1998M16.1999 22.1998H7.7999C6.47442 22.1998 5.3999 21.1253 5.3999 19.7998L4.85198 6.64976C4.82358 5.96801 5.3686 5.3998 6.05094 5.3998H17.9489C18.6312 5.3998 19.1762 5.96801 19.1478 6.64976L18.5999 19.7998C18.5999 21.1253 17.5254 22.1998 16.1999 22.1998Z"
                                                                    stroke="#242A30" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        {/* </div> */}
    </div>
  )
}

export default Dashboard