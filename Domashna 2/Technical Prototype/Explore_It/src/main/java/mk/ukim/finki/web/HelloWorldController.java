package mk.ukim.finki.web;

import mk.ukim.finki.service.AtmService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    private final AtmService atmService;

    public HelloWorldController(AtmService atmService) {
        this.atmService = atmService;
    }

    @GetMapping("/hello")
    public String sayHello() {
        return atmService.listAll().toString();
    }
}
