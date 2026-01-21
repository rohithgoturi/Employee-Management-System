// localStorage.clear();
const employees = [
  {
    id: 1,
    name: "Ravi",
    email: "employee1@gmail.com",
    password: "123",

    activeCount: 1,
    newTaskCount: 1,
    completedCount: 1,
    failedCount: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Login Page",
        description: "Create UI for login page using Tailwind CSS",
        date: "2026-01-20",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-15",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate payment API",
        date: "2026-01-10",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    name: "Arjun",
    email: "employee2@gmail.com",
    password: "123",

    activeCount: 1,
    newTaskCount: 1,
    completedCount: 1,
    failedCount: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Dashboard",
        description: "Build dashboard UI with charts",
        date: "2026-01-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress and optimize website images",
        date: "2026-01-14",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy App",
        description: "Deploy app to production server",
        date: "2026-01-12",
        category: "DevOps"
      }
    ]
  },

  {
    id: 3,
    name: "Suresh",
    email: "employee3@gmail.com",
    password: "123",

    activeCount: 1,
    newTaskCount: 1,
    completedCount: 1,
    failedCount: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Profile Page",
        description: "Design profile page UI",
        date: "2026-01-22",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Form Validation",
        description: "Add validations to signup form",
        date: "2026-01-16",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email Service",
        description: "Integrate email notification service",
        date: "2026-01-11",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    name: "Mahesh",
    email: "employee4@gmail.com",
    password: "123",

    activeCount: 1,
    newTaskCount: 1,
    completedCount: 1,
    failedCount: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Task Card",
        description: "Create reusable task card component",
        date: "2026-01-23",
        category: "React"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor Code",
        description: "Clean and refactor old components",
        date: "2026-01-17",
        category: "Code Quality"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Unit Testing",
        description: "Write unit tests for reducers",
        date: "2026-01-13",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    name: "Kiran",
    email: "employee5@gmail.com",
    password: "123",

    activeCount: 1,
    newTaskCount: 1,
    completedCount: 1,
    failedCount: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement Dark Mode",
        description: "Add dark mode support",
        date: "2026-01-24",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update README",
        description: "Update project documentation",
        date: "2026-01-18",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Performance Audit",
        description: "Improve Lighthouse score",
        date: "2026-01-14",
        category: "Performance"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123"
  }
];



export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin };
}