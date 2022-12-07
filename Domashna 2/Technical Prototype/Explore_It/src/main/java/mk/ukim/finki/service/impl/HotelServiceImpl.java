package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Hotel;
import mk.ukim.finki.repository.impl.InMemoryHotelRepository;
import mk.ukim.finki.service.HotelService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService {

    private final InMemoryHotelRepository hotelRepository;

    public HotelServiceImpl(InMemoryHotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public List<Hotel> listAll() {
        return this.hotelRepository.listAll();
    }
}
