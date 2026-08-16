import React from 'react';
import { Table, Container, Badge } from 'react-bootstrap';
import { Cart, Headset, Palette } from 'react-bootstrap-icons';

export default function RBBadges() {
  const tableData = [
    { 
      employee: 'Joseph Oden', 
      department: 'Sales', 
      icon: <Cart className="me-2 text-secondary" />, 
      salary: '$64,000', 
      date: 'Aug 3, 2024', 
      status: 'PENDING', 
      bg: 'info', 
      employment: 'Full-Time' 
    },
    { 
      employee: 'Carol Brown', 
      department: 'Support', 
      icon: <Headset className="me-2 text-secondary" />, 
      salary: '$82,000', 
      date: 'Aug 6, 2024', 
      status: 'NEGOTIATING', 
      bg: 'warning', 
      employment: 'Part-Time' 
    },
    { 
      employee: 'Peggy Castello', 
      department: 'Design', 
      icon: <Palette className="me-2 text-secondary" />, 
      salary: '$120,000', 
      date: 'Aug 13, 2024', 
      status: 'FAILED', 
      bg: 'danger', 
      employment: 'Full-Time' 
    },
    { 
      employee: 'Katherine Grey', 
      department: 'Sales', 
      icon: <Cart className="me-2 text-secondary" />, 
      salary: '$75,000', 
      date: 'Aug 19, 2024', 
      status: 'PAID', 
      bg: 'success', 
      employment: 'Full-Time' 
    },
    { 
      employee: 'Sandra Palace', 
      department: 'Design', 
      icon: <Palette className="me-2 text-secondary" />, 
      salary: '$54,000', 
      date: 'Aug 22, 2024', 
      status: 'PENDING', 
      bg: 'info', 
      employment: 'Contractor' 
    },
    { 
      employee: 'Nelson Metz', 
      department: 'Sales', 
      icon: <Cart className="me-2 text-secondary" />, 
      salary: '$28,000', 
      date: 'Aug 27, 2024', 
      status: 'OVERDUE', 
      bg: 'primary', 
      employment: 'Part-Time' 
    },
    { 
      employee: 'Roger Ryder', 
      department: 'Sales', 
      icon: <Cart className="me-2 text-secondary" />, 
      salary: '$93,000', 
      date: 'Aug 31, 2024', 
      status: 'PAID', 
      bg: 'success', 
      employment: 'Contractor' 
    },
    { 
      employee: 'Evan Walter', 
      department: 'Support', 
      icon: <Headset className="me-2 text-secondary" />, 
      salary: '$55,000', 
      date: 'Sep 5, 2024', 
      status: 'NEGOTIATING', 
      bg: 'warning', 
      employment: 'Full-Time' 
    },
    { 
      employee: 'Julien Saint', 
      department: 'Design', 
      icon: <Palette className="me-2 text-secondary" />, 
      salary: '$87,000', 
      date: 'Sep 11, 2024', 
      status: 'OVERDUE', 
      bg: 'primary', 
      employment: 'Full-Time' 
    },
  ];

  return (
    <div>
      <div className="fw-bold text-info fs-5">RB Badges</div>
      <hr />

      <Container className="my-4">
        <Table responsive hover className="align-middle text-muted">
          <thead className="text-uppercase border-bottom">
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>Employment Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="text-dark fw-medium">{row.employee}</td>
                <td>
                  {row.icon} {row.department}
                </td>
                <td>{row.salary}</td>
                <td>{row.date}</td>
                <td>
                  {/* Soft Background + Dark Colored Text */}
                  <Badge 
                    bg={`${row.bg}-subtle`} 
                    className={`text-${row.bg} text-uppercase px-2 py-1 border border-${row.bg}-subtle`}
                  >
                    {row.status}
                  </Badge>
                </td>
                <td>{row.employment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}