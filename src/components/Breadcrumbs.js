import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ selectedCategory, setSelectedCategory }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    useEffect(() => {
        if (location.pathname === '/') {
            setSelectedCategory(null);
        }
    }, [location.pathname]);

    const renderBreadcrumbItem = (to, label) => (
        <li className="flex items-center" key={to}>
            <span className="text-gray-500">/</span>
            <Link to={to} className="hover:text-yellow-300 font-semibold transition duration-200">
                {label}
            </Link>
        </li>
    );

    return (
        <div>
            <nav aria-label="breadcrumb" className="text-white bg-gray-800 p-4 shadow-lg flex justify-between items-center">
                <ol className="flex space-x-2">
                    {renderBreadcrumbItem("/", "Home")}
                    
                    {selectedCategory && renderBreadcrumbItem(`/category/${selectedCategory}`, `Category ${selectedCategory}`)}

                    {pathnames.map((pathname, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        
                        if (pathname === 'category' || pathname === 'product') {
                            return null;
                        }
                        if (index > 0 && pathnames[index - 1] === 'category') {
                            return null;
                        }

                        return renderBreadcrumbItem(routeTo, pathname.charAt(0).toUpperCase() + pathname.slice(1));
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
