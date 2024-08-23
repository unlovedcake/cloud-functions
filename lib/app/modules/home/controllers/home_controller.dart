import 'dart:convert';

import 'package:get/get.dart';
import 'package:cloud_functions/cloud_functions.dart';
import 'package:http/http.dart' as http;

final functions = FirebaseFunctions.instanceFor(region: 'asia-southeast2');

class HomeController extends GetxController {
  //TODO: Implement HomeController

  final count = 0.obs;
  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  void increment() => count.value++;

  Future<dynamic> getTodos() async {
    final HttpsCallable callable = functions.httpsCallable('apiFunction');
    final response = await callable.call({'method': 'GET'});

    print(response.data);
    return response.data;
  }

  Future<dynamic> addTodo(String title, bool completed,
      {int userId = 1}) async {
    final HttpsCallable callable = functions.httpsCallable('apiFunction');
    final response = await callable.call({
      'method': 'POST',
      'payload': {
        'title': title,
        'completed': completed,
        'userId': userId,
        'id': userId,
      },
    });
    return response.data;
  }

  Future<dynamic> updateTodo(int id, String title, bool completed) async {
    final HttpsCallable callable = functions.httpsCallable('todoFunction');
    final response = await callable.call({
      'method': 'PUT',
      'payload': {
        'id': 1,
        'userId': 1,
        'title': title,
        'completed': completed,
      },
    });
    return response.data;
  }

  Future<dynamic> deleteTodo(int id) async {
    final HttpsCallable callable = functions.httpsCallable('apiFunction');
    final response = await callable.call({
      'method': 'DELETE',
      'payload': {
        'id': id,
      },
    });
    return response.data;
  }
}
