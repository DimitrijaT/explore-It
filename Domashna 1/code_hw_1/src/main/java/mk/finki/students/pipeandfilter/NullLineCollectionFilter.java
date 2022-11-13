package mk.finki.students.pipeandfilter;

import mk.finki.students.service.Line;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class NullLineCollectionFilter implements Filter<List<Line>> {
    public List<Line> execute(List<Line> input) {
        return input.stream().filter(Objects::nonNull).collect(Collectors.toList());
    }
}
