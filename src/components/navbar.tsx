import { useLocation, useNavigate, Link } from 'react-router-dom';

const navigation = [
  { name: 'Read', href: '/', current: false },
  { name: 'Add', href: '/add', current: false },
  { name: 'About', href: '/about', current: false }
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  navigation.forEach((item) => {
    item.current = item.href === location.pathname;
  });

  return (
    <>
      <div className="bg-gray-800 px-2 sm:px-6 lg:px-8 flex-none">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="TLDR; it"
                onClick={() => navigate('/')}
              />
            </div>
            <div className="block ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
