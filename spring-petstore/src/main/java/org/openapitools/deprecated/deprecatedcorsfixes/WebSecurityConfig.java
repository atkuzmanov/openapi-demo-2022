package org.openapitools.deprecated.deprecatedcorsfixes;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebSecurityConfig {}

/*
    Requires the following dependency in the pom file:
<!--        <dependency>-->
<!--            <groupId>org.springframework.security</groupId>-->
<!--            <artifactId>spring-security-config</artifactId>-->
<!--            <version>5.3.6.RELEASE</version>-->
<!--        </dependency>-->
 */

//@Configuration
////@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        System.out.println(">>> Config 2 - 1.");
//
//        http.cors().and().csrf().disable();
//    }
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                System.out.println(">>> Config 2 - 2.");
//
//                registry.addMapping("/**")
//                        .allowedOrigins("*", "http://localhost:8080", "http://localhost:4200")
//                        .allowedMethods("GET", "POST", "OPTIONS", "PUT")
//                        .allowedHeaders("Content-Type", "X-Requested-With", "Accept", "Origin", "Access-Control-Request-Method",
//                                "Access-Control-Request-Headers", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
//                        .exposedHeaders("Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
//                        .allowCredentials(true)
//                        .maxAge(3600);
//            }
//        };
//    }
//}