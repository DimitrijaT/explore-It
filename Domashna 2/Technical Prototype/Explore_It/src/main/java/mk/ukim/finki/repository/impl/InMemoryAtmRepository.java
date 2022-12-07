package mk.ukim.finki.repository.impl;


import mk.ukim.finki.bootstrap.DataHolder;
import mk.ukim.finki.model.Atm;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InMemoryAtmRepository {
    public List<Atm> listAll() {
        return DataHolder.atms;
    }
}
