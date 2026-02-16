from selenium import webdirver
from selenium.webdriver.common.by import By


def test_user_can_login():
    driver=webdirver.chrome()
    driver.get('http://127.0.0.1:5500/index.html')

    driver.find_element(By.NAME,'username').send_keys('LOVELESS')
    driver.find_element(BY.NAME,'password').send_keys('test121')

    driver.find_element(By. ID,'login-button').click()

    welcome_message = driver.find_element(By.ID, 'welcome').text

    assert 'welcome , testuser' in welcome_message

    driver.quit()


