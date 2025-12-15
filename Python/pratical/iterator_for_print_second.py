lst = [1, 2, 3, 4, 5, 6]

it = iter(lst)
while True:
  try:
    val = next(it)
    print(val)
    next(it)
  except StopIteration:
      break