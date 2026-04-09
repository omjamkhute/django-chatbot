
# from django.contrib import admin
# from django.urls import path
# # from . import views

# # urlpatterns = [
# #     path('admin/', admin.site.urls),
# #     path('',views.chat_view, name='chat'),
# #     path('chat/', views.chat_view, name='chat_view'), 
    
# #     # ✅ ADD THIS LINE is added to get api responsed
# #     path('api/chat/', views.chat, name='chat_api'),
# # ]

# # from django.contrib import admin
# # from django.urls import path, include

# # urlpatterns = [
# #     path('admin/', admin.site.urls),
# #     path('', include('chatapp.urls')),
# # ]


# # from django.urls import path
# # from . import views

# # urlpatterns = [
# #     path('', views.home, name='home'),
# # ]


# # changes
# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.home, name='home'),
#     path('api/chat/', views.chat, name='chat_api'),  # ✅ IMPORTANT
# ]


from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/chat/', views.chat, name='chat_api'),  # ✅ IMPORTANT
]