from django.http import HttpResponse

def bienvenido(request):
    return HttpResponse("Bienvenido")