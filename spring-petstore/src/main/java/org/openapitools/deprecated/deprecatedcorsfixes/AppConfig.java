package org.openapitools.deprecated.deprecatedcorsfixes;

public class AppConfig {}

//@Configuration
//@ServletComponentScan(basePackages = {"org.openapitools", "org.openapitools.api" , "org.openapitools.configuration"})
//@ComponentScan(basePackages = {"org.openapitools", "org.openapitools.api" , "org.openapitools.configuration"})
//public class AppConfig {
//
//    @Bean
//    public FilterRegistrationBean <CorsFilterCustom> filterRegistrationBean() {
//        System.out.println(">>> Config 1.");
//
//        FilterRegistrationBean <CorsFilterCustom> registrationBean = new FilterRegistrationBean();
//
//        CorsFilterCustom corsFilter = new CorsFilterCustom();
//
//        registrationBean.setDispatcherTypes(DispatcherType.REQUEST);
//        registrationBean.setFilter(corsFilter);
//        registrationBean.addUrlPatterns("/**");
//        registrationBean.setOrder(Ordered.HIGHEST_PRECEDENCE); // Set precedence
//        return registrationBean;
//    }
//}
