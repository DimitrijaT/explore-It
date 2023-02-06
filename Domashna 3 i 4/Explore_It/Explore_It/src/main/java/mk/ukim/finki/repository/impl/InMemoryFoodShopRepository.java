package mk.ukim.finki.repository.impl;

import mk.ukim.finki.bootstrap.DataHolder;
import mk.ukim.finki.model.FoodShop;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InMemoryFoodShopRepository {
    public List<FoodShop> listAll() {
        return DataHolder.foodShops;
    }
}
