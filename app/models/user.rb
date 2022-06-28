class User < ApplicationRecord
    has_many :notes
  
    has_secure_password
  
    validates :bio, :email, presence: true
    validates :username, :email,  presence: true, uniqueness: true
end
