/**
 * Centralized Routing Configuration
 * All page routes are declared here for easy management and consistency
 */

export const routes = {
  // Public Routes
  home: "/",

  // Authentication Routes
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    resetPassword: "/auth/reset-password",
  },

  // Doctor Routes (Public)
  doctors: {
    list: "/doctors",
    details: (id: string) => `/doctors/${id}`,
  },

  // Admin Dashboard Routes
  dashboard: {
    admin: {
      home: "/dashboard/admin",
      page: "/dashboard/admin/page", // Added route
      doctors: "/dashboard/admin/doctors",
      patients: "/dashboard/admin/patients",
      reports: "/dashboard/admin/reports",
    },

    // Doctor Dashboard Routes
    doctor: {
      home: "/dashboard/doctor",
      dashboard: "/dashboard/doctor/dashboard", // <-- Added route
      appointments: "/dashboard/doctor/appointments",
      schedule: "/dashboard/doctor/schedule",
      profile: "/dashboard/doctor/profile",
    },

    // Patient Dashboard Routes
    patient: {
      home: "/dashboard/patient",
      searchDoctor: "/dashboard/patient/search-doctor",
      appointments: "/dashboard/patient/appointments",
      history: "/dashboard/patient/history",
    },
  },
};

// Type-safe route navigation helper
export type RouteKeys = typeof routes

// Get all available routes as array
export const getAllRoutes = (): string[] => {
  const routesList: string[] = []

  const extractRoutes = (obj: any): void => {
    Object.values(obj).forEach((value) => {
      if (typeof value === "string") {
        routesList.push(value)
      } else if (typeof value === "object") {
        extractRoutes(value)
      }
    })
  }

  extractRoutes(routes)
  return routesList
}
