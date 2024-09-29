import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';

export function search(delay = 750) {
  return (source$: Observable<string>) =>
    source$.pipe(
      debounceTime(delay),
      distinctUntilChanged(),
      map((value) => value.trim())
    );
}
