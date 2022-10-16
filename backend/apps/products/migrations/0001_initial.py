# Generated by Django 4.1.2 on 2022-10-16 16:45

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('image_url', models.URLField()),
                ('description', models.TextField()),
                ('stocks', models.PositiveIntegerField()),
                ('create_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('update_at', models.DateTimeField(blank=True, null=True)),
                ('brands', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='categories.brand')),
                ('categories', models.ManyToManyField(to='categories.category')),
                ('colors', models.ManyToManyField(to='categories.color')),
                ('tags', models.ManyToManyField(to='categories.tag')),
            ],
        ),
    ]
