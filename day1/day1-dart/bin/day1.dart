import 'dart:io';

void main(List<String> arguments) async {
  final input = File('input.txt');

  input.readAsLines().then((value) =>
      (print("Question 1: ${countIncrements(value.map(int.parse).toList())}")));
  input.readAsLines().then((value) =>
      (print("Question 2: ${countTriples(value.map(int.parse).toList())}")));
}

int countIncrements(List<int> list) {
  int count = 0;

  for (int i = 0; i < list.length - 1; i++) {
    if (list[i] < list[i + 1]) {
      count++;
    }
  }
  print(count);
  return count;
}

int countTriples(List<int> list) {
  int count = 0;
  int max = list[0] + list[1] + list[2];

  for (int i = 0; i < list.length - 2; i++) {
    int temp = list[i] + list[i + 1] + list[i + 2];
    if (temp > max) {
      count++;
    }
    max = temp;
  }

  return count;
}
