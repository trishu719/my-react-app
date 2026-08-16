import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const RBPagination = () => {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="container py-3">
      <div className="fw-bold text-info fs-5">Paginations</div>
      <hr />

      <div className="mb-3 fw-semibold">
        Active Page: <span>{page}</span>
      </div>

      <Pagination>
        <Pagination.First
          onClick={() => setPage(1)}
          disabled={page === 1}
        />
        <Pagination.Prev
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        />
        {[1, 2, 3, 4, 5].map((item) => (
          <Pagination.Item
            key={item}
            active={page === item}
            onClick={() => setPage(item)}
          >
            {item}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        />
        <Pagination.Last
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default RBPagination;