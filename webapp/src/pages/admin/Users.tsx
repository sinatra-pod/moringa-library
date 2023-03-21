import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import AppBar from "../../components/header/AppBar";
import DataTable from "react-data-table-component";
import { FilterComponent } from "../../components/FilterComponent";

const columns = [
  {
    name: "Full Name",
    selector: (row: any) => row.fullName,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "Github Username",
    selector: (row: any) => row.ghUsername,
    sortable: true,
  },
  {
    name: "Role",
    selector: (row: any) => row.role,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    ghUsername: "johndoe",
    role: "reviewer",
  },
  {
    id: 1,
    fullName: "Mary Doe",
    email: "marydoe@gmail.com",
    ghUsername: "marydoe",
    role: "admin",
  },
];

const Users = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState<any>([]);
  const filteredItems = rows.filter(
    (item: any) =>
      item.role && item.fullName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };

    return (
        <FilterComponent onFilter={(e: any)=> setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
}, [filterText, resetPaginationToggle]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <AppBar />
      <main className="flex gap-4 justify-between px-4">
        <section className="w-[30%] flex flex-col justify-center items-center px-2 drop-shadow-lg">
          {/* image section */}
          <div className="w-10/12 py-8">
            <img
              className="w-[19rem] h-[19rem] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Bordered avatar"
            />
          </div>

          {/* input fields */}

          <form className="w-full py-4 space-y-4">
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Github Username
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </form>

          {/* end of input fields */}

          {/* end of image section */}
        </section>
        <section className="w-[70%] drop-shadow-lg py-4">
          {/* Search for user section */}

          {/* end of user search */}

          {/* Table component */}
          <DataTable
            title="Users"
            columns={columns}
            data={filteredItems}
            progressPending={pending}
            selectableRows
			persistTableHead
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
			subHeaderComponent={subHeaderComponentMemo}
          />
          {/* end of table component */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Users;
