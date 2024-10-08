const homepage = [
  // Router for home page
  {
    path: "/homepage",
    name: "home.page",
    component: () => import("../layouts/index.vue"),
    meta: {
      title: "Shineonyou - Đặt lịch khám, sản phẩm sức khỏe, dịch vụ ",
    },
    children: [
      {
        path: "product",
        name: "home.page.product",
        component: () => import("../pages/list_products_page.vue"),
        meta: {
          title: "Sản phẩm sức khỏe",
        },
      },

      {
        path: "service",
        name: "home.page.service",
        component: () => import("../pages/service_page.vue"),
        meta: {
          title: "Dịch vụ sức khỏe",
        },
      },
      // -------------------------------BOOKING URL----------------------------------
      {
        path: "booking",
        name: "home.page.booking",
        component: () => import("../pages/booking_page.vue"),
        meta: {
          title: "Đặt lịch khám",
        },
        children: [
          {
            path: "old",
            name: "home.page.booking.old",
            component: () =>
              import("../pages/children_booking_page/booking_old.vue"),
            meta: {
              title: "Đặt lịch khám dành cho bệnh nhân cũ",
            },
          },
          {
            path: "new",
            name: "home.page.booking.new",
            component: () =>
              import("../pages/children_booking_page/booking_new.vue"),
            meta: {
              title: "Đặt lịch khám dành cho bệnh nhân mới",
            },
          },
        ],
      },
      // -----------------SELECT_SERVICE_BOOKING----------------
      {
        path: "booking/select_service_booking",
        name: "home.page.booking.select_service_booking",
        component: () =>
          import("../pages/children_booking_page/select_service.vue"),
        meta: {
          title: "Chọn dịch vụ khám",
        },
        children: [
          // ----------------SELECT_DOCTOR_BOOKING-----------------------
          {
            path: "booking/select_doctor_booking",
            name: "home.page.booking.select_doctor_booking",
            component: () =>
              import("../pages/children_booking_page/select_doctor.vue"),
            meta: {
              title: "Chọn bác sĩ khám và giờ khám",
            },
          },
        ],
      },

      // ---------------------CONTACT URL--------------------------------------
      {
        path: "contact",
        name: "home.page.contact",
        component: () => import("../pages/contacts_page.vue"),
        meta: {
          title: "Liên hệ",
        },
      },

      {
        path: "about",
        name: "home.page.about",
        component: () => import("../pages/introduction_page.vue"),
        meta: {
          title: "Hướng dẫn khách hàng sử dụng trang web",
        },
      },

      {
        path: "list-doctor",
        name: "home.page.list-doctor",
        component: () => import("../pages/list_doctor_page.vue"),
        meta: {
          title: "Danh sách bác sĩ",
        },
      },
    ],
  },
  // Login page for customer
  {
    path: "/accounts",
    name: "accounts.page",
    component: () => import("../layouts/accounts_page.vue"),

    children: [
      {
        path: "login",
        name: "login.page",
        component: () => import("../pages/login_page.vue"),
        meta: {
          title: "Đăng nhập",
        },
      },

      {
        path: "sign_up",
        name: "sign_up.page",
        component: () => import("../pages/signup_page.vue"),
        meta: {
          title: "Đăng kí tài khoản",
        },
      },
    ],
  },
];
export default homepage;
