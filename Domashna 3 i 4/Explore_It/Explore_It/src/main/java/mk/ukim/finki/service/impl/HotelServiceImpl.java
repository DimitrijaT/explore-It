package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Hotel;
import mk.ukim.finki.repository.jpa.HotelRepository;
import mk.ukim.finki.service.HotelService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;

    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public List<Hotel> listAll() {
        return this.hotelRepository.findAll();
    }
}
