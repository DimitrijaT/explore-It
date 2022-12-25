package mk.ukim.finki.repository.impl;

import mk.ukim.finki.bootstrap.DataHolder;
import mk.ukim.finki.model.Hotel;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InMemoryHotelRepository {
    public List<Hotel> listAll() {
        return DataHolder.hotels;
    }
}
